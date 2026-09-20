import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":601};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.igalj5b7h {
  fill: var(--svg-color--2bcc7e, #2bcc7e);
  d: path("m99.306 0l110.8 110.87l-110.8 110.87H256v156.796H99.59c19.362-48.334 19.968-102.439 1.811-151.132l-2.286-5.855c-10.2-25.017-25.443-48.46-45.734-68.762L0 99.37zM.535 501.368l98.77 98.92l110.8-110.872L99.507 378.75c-10.199 25.384-25.573 49.172-46.128 69.739z");
}
</style><path class="igalj5b7h"/>`,
		"fallback": "logos:elasticpath-icon",
	});
}

export default Component;
