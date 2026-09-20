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
		"content": `<style>.syl_eknze {
  fill: currentColor;
  d: path("M16 23V12h7v6h-2v5zm-3.5-4q-1.7 0-2.9-1.15T8.4 15q0-1.675 1.2-2.837T12.5 11h2v8zM3 13V8H1V2h7v11zm6.5-4V1h2q1.675 0 2.888 1.163T15.6 5q0 1.7-1.212 2.85T11.5 9z");
}
</style><path class="syl_eknze"/>`,
		"fallback": "material-symbols:earbuds-2-sharp",
	});
}

export default Component;
