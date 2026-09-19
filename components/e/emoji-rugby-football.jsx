import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ma85azbxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.282 24.106c0-1.391.367-2.696 1.01-3.824m10.579 10.523a7.7 7.7 0 0 1-3.859 1.031m7.731-7.73a7.7 7.7 0 0 1-1.033 3.862M20.124 17.423a7.7 7.7 0 0 1 3.83-1.047m17.57-9.898L6.478 41.524m21.832-18.68l-3.154-3.154m5.887.42l-3.154-3.153m-2.312 8.62l-3.154-3.154m.421 5.887l-3.154-3.154m.42 5.887l-3.153-3.153");
}

.suei_e5pa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.486 6.44c-9.531-2.5-20.098-.014-27.568 7.456c-7.486 7.485-9.966 18.08-7.441 27.627l.037.038c9.531 2.499 20.098.013 27.568-7.457c7.486-7.485 9.966-18.08 7.441-27.627");
}
</style><path class="suei_e5pa"/><path class="ma85azbxt"/>`,
		"fallback": "arcticons:emoji-rugby-football",
	});
}

export default Component;
