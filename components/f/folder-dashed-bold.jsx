import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lhml37bix {
  fill: currentColor;
  d: path("M100 208a12 12 0 0 1-12 12H39.38A19.41 19.41 0 0 1 20 200.62V192a12 12 0 0 1 24 0v4h44a12 12 0 0 1 12 12m60-12h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-56a12 12 0 0 0-12 12v44h-12a12 12 0 0 0 0 24h16.89A19.13 19.13 0 0 0 236 200.89V152a12 12 0 0 0-12-12m-8-72h-48a12 12 0 0 0 0 24h44v20a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20M32 164a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12M20 80V52a20 20 0 0 1 20-20h52.41a20 20 0 0 1 14.94 6.71L137 72a12 12 0 0 1-9 20H32a12 12 0 0 1-12-12m24-12h57.28L90.61 56H44Z");
}
</style><path class="lhml37bix"/>`,
		"fallback": "ph:folder-dashed-bold",
	});
}

export default Component;
