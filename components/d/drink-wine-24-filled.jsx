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
		"content": `<style>.lc65z8b8c {
  fill: currentColor;
  d: path("M6.75 2a.75.75 0 0 0-.75.75v7a5.75 5.75 0 0 0 5 5.701v5.057L8.753 20.5a.75.75 0 0 0-.006 1.5l3 .011h.005l3.5-.011a.75.75 0 0 0-.004-1.5l-2.748.009v-5.053A6.25 6.25 0 0 0 18 9.25v-6.5a.75.75 0 0 0-.75-.75zm.75 5V3.5h9V7zm8.183 2.707a3.73 3.73 0 0 1-1.159 2.066a3.75 3.75 0 0 1-1.754.898a.5.5 0 0 1-.205-.979a2.74 2.74 0 0 0 1.286-.658a2.76 2.76 0 0 0 .85-1.515a.5.5 0 0 1 .982.188");
}
</style><path class="lc65z8b8c"/>`,
		"fallback": "fluent:drink-wine-24-filled",
	});
}

export default Component;
