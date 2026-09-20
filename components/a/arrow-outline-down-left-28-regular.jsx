import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n7961sm-x {
  fill: currentColor;
  d: path("M15.362 2.66a2.25 2.25 0 0 1 3.182 0l6.797 6.796a2.25 2.25 0 0 1 0 3.182L18.74 19.24l1.602 1.601c1.349 1.35.512 3.66-1.388 3.832l-14.5 1.318a2.25 2.25 0 0 1-2.444-2.444L3.328 9.049C3.5 7.15 5.81 6.313 7.159 7.662l1.6 1.6zm2.121 1.06a.75.75 0 0 0-1.06 0L9.29 10.853a.75.75 0 0 1-1.06 0l-2.131-2.13a.75.75 0 0 0-1.278.462L3.503 23.683a.75.75 0 0 0 .815.814l14.5-1.318a.75.75 0 0 0 .462-1.277l-2.132-2.131a.75.75 0 0 1 0-1.061l7.133-7.132a.75.75 0 0 0 0-1.061z");
}
</style><path class="n7961sm-x"/>`,
		"fallback": "fluent:arrow-outline-down-left-28-regular",
	});
}

export default Component;
