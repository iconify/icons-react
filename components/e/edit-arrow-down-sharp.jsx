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
		"content": `<style>.hyj9dtbpg {
  fill: currentColor;
  d: path("m19.385 19l-2.693-2.692l.714-.708l1.479 1.479V5h1v12.085l1.484-1.485l.708.708zM4 17.116v-3.21l7.375-7.273q.485-.466 1.159-.46t1.133.49l.931.943q.46.479.457 1.15t-.482 1.13l-7.325 7.23zm8.456-6.552l1.404-1.391q.192-.173.192-.432q0-.26-.192-.452l-.937-.937q-.173-.173-.423-.173t-.442.173l-1.43 1.404z");
}
</style><path class="hyj9dtbpg"/>`,
		"fallback": "material-symbols-light:edit-arrow-down-sharp",
	});
}

export default Component;
