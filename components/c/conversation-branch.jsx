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
		"content": `<style>.x-ldu1nuo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 5.5q0-2.75 2.75-2.75T8.75 5.5q0 2.345-2 2.69v6.56h7.75q1.139 0 1.945-.805q.805-.806.805-1.945v-.31q-2-.345-2-2.69q0-2.75 2.75-2.75T20.75 9q0 2.345-2 2.69V12q0 1.76-1.245 3.005T14.5 16.25H7.845q.905.673.905 2.25q0 2.75-2.75 2.75T3.25 18.5q0-2.345 2-2.69V8.19q-2-.345-2-2.69");
}
</style><path class="x-ldu1nuo"/>`,
		"fallback": "uix-solid:conversation-branch",
	});
}

export default Component;
