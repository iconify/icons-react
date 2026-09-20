import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v-0_lubzb {
  fill: currentColor;
  d: path("M12 3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-1.5.5a.5.5 0 0 0 0-1H7.707l.647-.646a.5.5 0 1 0-.708-.708l-1.5 1.5A.5.5 0 0 0 6 3.497v.006a.5.5 0 0 0 .146.35l1.5 1.5a.5.5 0 1 0 .708-.707L7.707 4zm-2 4a4.5 4.5 0 0 0 2.484-.747A2 2 0 0 1 9 9H6.651l-2.874 1.916A.5.5 0 0 1 3 10.5V9a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1.758A4.5 4.5 0 0 0 8.5 8");
}
</style><path class="v-0_lubzb"/>`,
		"fallback": "fluent:comment-arrow-left-12-filled",
	});
}

export default Component;
