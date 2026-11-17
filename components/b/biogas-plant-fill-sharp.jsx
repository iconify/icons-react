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
		"content": `<style>.x30d4wi-y {
  fill: currentColor;
  d: path("M14.798 9c.431.611.764 1.286.985 2H2.217a7.1 7.1 0 0 1 6.39-4.989a7.1 7.1 0 0 1 13.376 1.808l.001.001q.015.084.016.17V17a1 1 0 0 1-1 1h-5v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h14v3h4V9Zm-2.163-2h7.014a5.101 5.101 0 0 0-8.863-.773c.649.169 1.272.43 1.849.773");
}
</style><path class="x30d4wi-y"/>`,
		"fallback": "coolicons:biogas-plant-fill-sharp",
	});
}

export default Component;
