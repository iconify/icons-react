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
		"content": `<style>.pfxeigb1n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.299 3.202q.659.659.659 1.591t-.66 1.592l-1.414 1.413q-.659.66-1.591.66q-.532 0-.975-.215l-3.007 3.007H20.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q-.001 3.831-2.71 6.539T12 21.247t-6.54-2.708T2.75 12q0-.074.014-.146q.015-.073.043-.141t.069-.129t.093-.114t.114-.093q.062-.042.13-.07t.14-.043t.147-.014h6.689l4.068-4.068q-.215-.443-.215-.975q0-.932.66-1.592l1.414-1.413q.659-.66 1.591-.66t1.591.66z");
}
</style><path class="pfxeigb1n"/>`,
		"fallback": "uix-solid:hair-dye-bowl",
	});
}

export default Component;
