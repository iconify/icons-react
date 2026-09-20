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
		"content": `<style>.pb36glf5y {
  fill: currentColor;
  d: path("M8.736 16.582Q9 16.317 9 15.923t-.264-.659t-.66-.264t-.659.265q-.264.264-.264.658t.264.659t.659.264t.659-.264m0-7.847Q9 8.471 9 8.077t-.264-.659t-.659-.264t-.659.264t-.264.659t.264.659t.659.264t.659-.264m3.923 3.923q.264-.265.264-.659t-.264-.659q-.265-.264-.659-.264t-.659.264q-.264.265-.264.659t.264.659q.265.264.659.264t.659-.264m3.923 3.923q.264-.265.264-.659t-.264-.659t-.659-.264t-.659.265t-.264.658t.265.659t.658.264t.659-.264m0-7.847q.264-.264.264-.658t-.264-.659t-.659-.264t-.659.264t-.264.659t.265.659t.658.264t.659-.264M4 20V4h16v16z");
}
</style><path class="pb36glf5y"/>`,
		"fallback": "material-symbols-light:casino-sharp",
	});
}

export default Component;
