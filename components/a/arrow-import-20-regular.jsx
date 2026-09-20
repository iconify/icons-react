import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.savk636oy {
  fill: currentColor;
  d: path("M17.5 4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5M2 10a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 .146.351v.006c0 .127-.05.254-.146.35l-4 4a.5.5 0 0 1-.708-.707l3.147-3.146H2.5A.5.5 0 0 1 2 10");
}
</style><path class="savk636oy"/>`,
		"fallback": "fluent:arrow-import-20-regular",
	});
}

export default Component;
