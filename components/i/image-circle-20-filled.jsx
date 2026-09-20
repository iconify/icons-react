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
		"content": `<style>.ag3vi2osj {
  fill: currentColor;
  d: path("M18 10a7.97 7.97 0 0 1-1.998 5.29l-4.95-4.871a1.5 1.5 0 0 0-2.104 0l-4.95 4.871A8 8 0 1 1 18 10m-7.649 1.131l4.944 4.866A7.97 7.97 0 0 1 10 18a7.97 7.97 0 0 1-5.295-2.003l4.945-4.866a.5.5 0 0 1 .701 0M12.75 8.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5");
}
</style><path class="ag3vi2osj"/>`,
		"fallback": "fluent:image-circle-20-filled",
	});
}

export default Component;
