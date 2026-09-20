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
		"content": `<style>.ujn3rm0hi {
  fill: currentColor;
  d: path("M4 16V5zm-3 5v-2h22v2zm19.175-3H2V3h18.175l-2 2H4v11h14.175zm-1.85-4.65l-1.45-1.45q.3-.275.463-.638t.162-.762t-.162-.763t-.463-.637l1.45-1.45q.575.575.875 1.312t.3 1.538t-.3 1.537t-.875 1.313m2.45 2.45l-1.4-1.4q.8-.8 1.213-1.8T21 10.5t-.413-2.1t-1.212-1.8l1.4-1.4q1.075 1.05 1.65 2.425T23 10.5t-.575 2.875t-1.65 2.425");
}
</style><path class="ujn3rm0hi"/>`,
		"fallback": "material-symbols:computer-sound-outline-sharp",
	});
}

export default Component;
