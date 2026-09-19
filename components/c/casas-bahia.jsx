import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tv8h67t4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.764 23.507c-.208-.03-.218-.31-.015-.361c3.308-.839 5.65-3.956 5.65-8.71c0-5.508-5.442-8.936-10.67-8.936H8.866v37h17.918c6.713 0 12.352-4.282 12.352-9.563c0-5.923-3.133-8.801-7.371-9.43m-22.9-8.296h28.512");
}
</style><path class="tv8h67t4h"/>`,
		"fallback": "arcticons:casas-bahia",
	});
}

export default Component;
