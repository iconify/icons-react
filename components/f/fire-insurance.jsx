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
		"content": `<style>.ae2rsxbad {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.491 20.207Q8.7 22.25 12 22.25t5.509-2.043Q19.75 18.134 19.75 15q0-5.791-4.559-9.107q-.143-.104-.318-.133q-.073-.012-.146-.01q-.074.003-.146.019q-.072.017-.139.047q-.068.031-.128.074t-.111.096q-.05.054-.089.117t-.066.132q-.026.069-.038.142q-.235 1.411-1.367 2.33q-.434-2.558-2.613-4.737q-.154-.155-.367-.202q-.072-.016-.146-.018t-.147.011t-.141.04t-.132.066q-.062.04-.115.091t-.096.112q-.043.06-.072.128q-.03.067-.046.139q-.433 1.948-2.293 4.836Q4.25 12.627 4.25 15q0 3.134 2.241 5.207m5.788-8.403l2.5 1q.104.041.191.112q.088.07.151.164q.063.093.096.2t.033.22v1.75q0 2.11-2.896 3.661q-.082.044-.171.066T12 19q-.093 0-.183-.023q-.089-.022-.171-.066Q8.75 17.36 8.75 15.25V13.5q0-.112.033-.22q.033-.107.096-.2t.151-.164t.191-.112l2.5-1q.135-.054.279-.054t.279.054");
}
</style><path class="ae2rsxbad"/>`,
		"fallback": "uix-solid:fire-insurance",
	});
}

export default Component;
