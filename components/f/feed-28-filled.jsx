import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mnn2i4ikh {
  fill: currentColor;
  d: path("M5.25 24.992h11.854c1.408 0 2.428-.475 2.747-1.957l.66-3.074h2.864a2.75 2.75 0 0 0 2.75-2.75v-6.705c0-1.678-1.364-2.573-2.679-2.518h-7.04V5.75A2.75 2.75 0 0 0 13.656 3H4.75A2.75 2.75 0 0 0 2 5.75v15.992a3.25 3.25 0 0 0 3.25 3.25M16.406 9.488h4.865q-.093.226-.15.487l-2.737 12.746c-.252 1.172-1.978.989-1.978-.21zM6.778 9.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m.003 9.016h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1 0-1.5m0-5.266h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1 0-1.5");
}
</style><path class="mnn2i4ikh"/>`,
		"fallback": "fluent:feed-28-filled",
	});
}

export default Component;
