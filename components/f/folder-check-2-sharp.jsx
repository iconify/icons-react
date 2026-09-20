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
		"content": `<style>.cesvd1qea {
  fill: currentColor;
  d: path("M20.143 14.857q1.165 1.164 1.165 2.835t-1.165 2.836t-2.835 1.164t-2.836-1.164t-1.164-2.836q0-1.67 1.164-2.835q1.165-1.165 2.836-1.165t2.835 1.165M10.943 18l.036.506q.017.25.09.494H3V5h6.596l2 2H21v5.487q-.817-.587-1.756-.883q-.938-.296-1.936-.296q-2.766 0-4.633 1.973T10.942 18m5.66 1.712l3.34-3.335l-.626-.627l-2.714 2.702L15.3 17.15l-.627.633z");
}
</style><path class="cesvd1qea"/>`,
		"fallback": "material-symbols-light:folder-check-2-sharp",
	});
}

export default Component;
