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
		"content": `<style>.ddak7ribv {
  fill: currentColor;
  d: path("M14.816 19q-2.935 0-4.972-2.037t-2.036-4.971q0-2.913 2.037-4.953Q11.88 5 14.816 5q2.913 0 4.952 2.04t2.04 4.952q0 2.934-2.04 4.971T14.816 19m2.459-3.794l.714-.714l-2.681-2.68V8.308h-1v3.906zM3.192 8.5v-1h3.616v1zm-1 4v-1h4.616v1zm1 4v-1h3.616v1z");
}
</style><path class="ddak7ribv"/>`,
		"fallback": "material-symbols-light:acute",
	});
}

export default Component;
