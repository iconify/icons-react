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
		"content": `<style>.bg7kebz_k {
  fill: var(--svg-color--67757f, #67757f);
  d: path("M18 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1");
}

.f934iu1fb {
  cx: 18px;
  cy: 18px;
  r: 14px;
  fill: var(--svg-color--e1e8ed, #e1e8ed);
}

.q6fjt1bvx {
  fill: var(--svg-color--67757f, #67757f);
  d: path("M18.001 19a1 1 0 0 1-.896-.553l-4-8a1 1 0 0 1 1.789-.895l4 8A1 1 0 0 1 18.001 19");
}

.yqfvb1bwf {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--99aab5, #99aab5);
}
</style><circle class="yqfvb1bwf"/><circle class="f934iu1fb"/><path class="bg7kebz_k"/><path class="q6fjt1bvx"/>`,
		"fallback": "twemoji:eleven-oclock",
	});
}

export default Component;
