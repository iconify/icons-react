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
		"content": `<style>.ieou1ts7p {
  fill: currentColor;
  d: path("M1 21v-2h22v2zm1-3V3h20v15z");
}
</style><path class="ieou1ts7p"/>`,
		"fallback": "material-symbols:computer-sharp",
	});
}

export default Component;
