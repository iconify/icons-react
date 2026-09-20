import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e4hujg-kx {
  fill: var(--svg-color--eee, #eee);
  d: path("M15 6L8 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h4l7-1z");
}

.xxu140h0a {
  fill: var(--svg-color--ce1126, #ce1126);
  d: path("M32 5H8l6.081 2.6L8 10.2l6.081 2.6L8 15.4l6.081 2.6L8 20.6l6.081 2.6L8 25.8l6.081 2.6L8 31h24a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}
</style><path class="e4hujg-kx"/><path class="xxu140h0a"/>`,
		"fallback": "twemoji:flag-for-flag-bahrain",
	});
}

export default Component;
