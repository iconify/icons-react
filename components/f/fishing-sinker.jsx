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
		"content": `<style>.lpzqjnjjp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.75 2.5v2.108q.566.173 1.018.624q.732.732.732 1.768t-.732 1.768q-.163.162-.34.289q4.322 4.191 4.322 7.443q0 2.382-1.684 4.066T12 22.25t-4.066-1.684T6.25 16.5q0-3.217 4.227-7.351Q9.5 8.563 9.5 7q0-2.092 1.75-2.433V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146");
}
</style><path class="lpzqjnjjp"/>`,
		"fallback": "uix-solid:fishing-sinker",
	});
}

export default Component;
