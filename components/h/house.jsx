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
		"content": `<style>.gkm72k64t {
  fill: currentColor;
  d: path("M5.692 19V9.946L2.604 12.25L2 11.458L12 4l4.346 3.223V5h1.885v3.639l3.788 2.819l-.603.792l-3.089-2.304V19h-4.52v-5.23h-3.615V19zm4.5-8.994h3.616q0-.704-.542-1.159q-.543-.455-1.266-.455t-1.265.455t-.543 1.159");
}
</style><path class="gkm72k64t"/>`,
		"fallback": "material-symbols-light:house",
	});
}

export default Component;
