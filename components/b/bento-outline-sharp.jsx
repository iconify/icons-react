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
		"content": `<style>.fuqvj4b2z {
  fill: currentColor;
  d: path("M2.885 18.116V5.885h18.23v12.23zM13.308 11.5h6.807V6.885h-6.807zm-9.423 5.616h8.423V6.885H3.885zM8 13.038q-.433 0-.735-.303q-.303-.302-.303-.735t.303-.736q.302-.303.735-.303t.736.303t.302.736t-.302.735q-.303.303-.736.303m5.308 4.077h6.808V12.5h-6.808z");
}
</style><path class="fuqvj4b2z"/>`,
		"fallback": "material-symbols-light:bento-outline-sharp",
	});
}

export default Component;
