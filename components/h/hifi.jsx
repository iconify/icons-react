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
		"content": `<style>.i1j7v1j5g {
  fill: var(--svg-color--6e2ef4, #6e2ef4);
  d: path("M3.601 12.296a2.04 2.04 0 0 1 0-2.89L9.41 3.599a2.044 2.044 0 0 1 2.89 2.89l-5.802 5.807a2.044 2.044 0 0 1-2.89 0zm6.157 1.949a2.04 2.04 0 0 1 0-2.89l1.599-1.6a2.044 2.044 0 1 1 2.89 2.89l-1.598 1.6a2.04 2.04 0 0 1-2.228.443a2 2 0 0 1-.663-.444m1.948 6.156a2.045 2.045 0 0 1 0-2.89l5.802-5.808a2.05 2.05 0 0 1 2.228-.443a2.045 2.045 0 0 1 .663 3.334L14.597 20.4a2.046 2.046 0 0 1-2.89 0");
}
</style><path class="i1j7v1j5g"/>`,
		"fallback": "token-branded:hifi",
	});
}

export default Component;
