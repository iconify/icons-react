import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wian0q88q {
  fill: currentColor;
  d: path("M4.25 20q-1.038 0-1.77-.73t-.73-1.77q0-.898.572-1.586t1.428-.854V8.94q-.856-.165-1.428-.853Q1.75 7.398 1.75 6.5q0-1.038.73-1.77T4.25 4t1.77.73t.73 1.77q0 .898-.572 1.587q-.572.688-1.428.854V11.5h6.75V8.94q-.856-.165-1.428-.853Q9.5 7.398 9.5 6.5q0-1.038.73-1.77T12 4t1.77.73t.73 1.77q0 .898-.572 1.587q-.572.688-1.428.854V11.5h5.27q.617 0 1.058-.441q.441-.442.441-1.059V8.94q-.855-.165-1.428-.853q-.572-.689-.572-1.587q0-1.038.731-1.77T19.77 4t1.769.73t.73 1.77q0 .898-.572 1.587q-.572.688-1.428.854V10q0 1.039-.73 1.77t-1.77.73H12.5v2.56q.856.165 1.428.853q.572.689.572 1.587q0 1.039-.73 1.77T12 20t-1.77-.73t-.73-1.77q0-.898.572-1.586t1.428-.854V12.5H4.75v2.56q.856.165 1.428.853q.572.689.572 1.587q0 1.039-.73 1.77T4.25 20");
}
</style><path class="wian0q88q"/>`,
		"fallback": "material-symbols-light:auto-transmission-rounded",
	});
}

export default Component;
