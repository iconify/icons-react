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
		"content": `<style>.ep41iwj-n {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M9.34 23a1 1 0 0 0 1.365.367l7.795-4.5a1 1 0 1 0-1-1.732l-7.795 4.5A1 1 0 0 0 9.34 23");
}

.f934iu1fb {
  cx: 18px;
  cy: 18px;
  r: 14px;
  fill: var(--svg-color--e1e8ed, #e1e8ed);
}

.mbt1d-r9l {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M17 18a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0z");
}

.yqfvb1bwf {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--99aab5, #99aab5);
}
</style><circle class="yqfvb1bwf"/><circle class="f934iu1fb"/><path class="mbt1d-r9l"/><path class="ep41iwj-n"/>`,
		"fallback": "twemoji:eight-oclock",
	});
}

export default Component;
