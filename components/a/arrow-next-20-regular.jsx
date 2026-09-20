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
		"content": `<style>.zdgenvbox {
  fill: currentColor;
  d: path("M13.5 5a.5.5 0 0 1 .492.41L14 5.5v9a.5.5 0 0 1-.992.09L13 14.5v-9a.5.5 0 0 1 .5-.5m-7.854.146a.5.5 0 0 1 .638-.057l.07.057l4.5 4.5a.5.5 0 0 1 .057.638l-.057.07l-4.5 4.5a.5.5 0 0 1-.765-.638l.057-.07L9.793 10L5.646 5.854a.5.5 0 0 1 0-.708");
}
</style><path class="zdgenvbox"/>`,
		"fallback": "fluent:arrow-next-20-regular",
	});
}

export default Component;
