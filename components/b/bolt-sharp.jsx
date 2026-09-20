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
		"content": `<style>.k3thqqujr {
  fill: currentColor;
  d: path("m9.154 20.885l1-6.885h-4.25l7.48-10.788h.462L12.866 11h5l-8.25 9.885z");
}
</style><path class="k3thqqujr"/>`,
		"fallback": "material-symbols-light:bolt-sharp",
	});
}

export default Component;
