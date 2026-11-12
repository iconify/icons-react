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
		"content": `<style>.a69cznbzg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.2895 5.7897C13.0092 4.77646 13.3942 3.48102 14.1374 2.73779C15.1212 1.75407 16.7161 1.75407 17.6998 2.73779C18.6835 3.72152 18.6835 5.31646 17.6998 6.30018C18.6835 5.31646 20.2785 5.31646 21.2622 6.30018C22.2459 7.28391 22.2459 8.87884 21.2622 9.86257C20.519 10.6058 19.2235 10.9908 18.2103 10.7105C17.674 10.562 17.0246 10.5378 16.6311 10.9313L13.0687 7.3689C13.4622 6.97541 13.438 6.32603 13.2895 5.7897ZM7.3689 13.0687C6.97541 13.4622 6.32603 13.438 5.7897 13.2895C4.77646 13.0092 3.48101 13.3942 2.73779 14.1374C1.75407 15.1212 1.75407 16.7161 2.73779 17.6998C3.72152 18.6835 5.31646 18.6835 6.30018 17.6998C5.31646 18.6835 5.31645 20.2785 6.30018 21.2622C7.28391 22.2459 8.87884 22.2459 9.86257 21.2622C10.6058 20.519 10.9908 19.2235 10.7105 18.2103C10.562 17.674 10.5378 17.0246 10.9313 16.6311L7.3689 13.0687Z");
}

.ckrv68b3g {
  fill: currentColor;
  d: path("M10.9315 16.6311L16.6313 10.9313L13.069 7.3689L7.36914 13.0687L10.9315 16.6311Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path clip-rule="evenodd" class="a69cznbzg"/><path class="ckrv68b3g"/>`,
		"fallback": "solar:bone-bold-duotone",
	});
}

export default Component;
