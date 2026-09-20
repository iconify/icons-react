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
		"content": `<style>.ae5c8jbsx {
  fill: currentColor;
  d: path("M8 22q-.825 0-1.412-.587T6 20v-1q0-1.175.513-2.175T7.85 15.15L7.225 11H5q-.825 0-1.412-.588T3 9V5q0-.825.588-1.412T5 3h5V2h4v1h3.975L16.15 15.15q.825.675 1.338 1.675T18 19v1q0 .825-.587 1.413T16 22zM6.925 9l-.6-4H5v4zm5.788 9.713Q13 18.425 13 18t-.288-.712T12 17t-.712.288T11 18t.288.713T12 19t.713-.288M9.7 14h4.6l1.35-9h-7.3z");
}
</style><path class="ae5c8jbsx"/>`,
		"fallback": "material-symbols:blender",
	});
}

export default Component;
