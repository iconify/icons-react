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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.ha1vlxxyu {
  d: path("M12 14v2.5");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sms0lfbha {
  d: path("M12 15h2.5");
}
</style><g class="nrj6p8qat"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="bo51iypxr"/><path class="ha1vlxxyu"/><path class="sms0lfbha"/></g>`,
		"fallback": "iconmind:access-review-outline-regular",
	});
}

export default Component;
