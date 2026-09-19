import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tals-090a {
  cx: 32px;
  cy: 52px;
  r: 10px;
  fill: currentColor;
}

.zpi0epb5m {
  fill: currentColor;
  d: path("M57.411 11.809C52.925-2.703 34.297 1.155 32 8.862C29.705 1.155 11.077-2.703 6.59 11.809C4.638 18.123 7.723 24 13.038 27.715C20.152 32.687 28.542 32.707 32 42c3.458-9.293 11.849-9.313 18.963-14.285c5.316-3.715 8.399-9.592 6.448-15.906");
}
</style><circle class="tals-090a"/><path class="zpi0epb5m"/>`,
		"fallback": "emojione-monotone:heavy-heart-exclamation",
	});
}

export default Component;
