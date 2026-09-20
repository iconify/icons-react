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
		"content": `<style>.dgh7jhswh {
  fill: var(--svg-color--9266cc, #9266cc);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.k161_wbmt {
  fill: var(--svg-color--fff, #fff);
  d: path("M5.717 9.156c0-1.55.992-2.418 2.325-2.418s2.325.868 2.325 2.418v17.611c0 1.551-.992 2.418-2.325 2.418s-2.325-.867-2.325-2.418zm7.44.156c0-1.427.992-2.388 2.387-2.388h5.148c6.945 0 10.914 4.465 10.914 11.348C31.605 24.783 27.389 29 21.001 29h-5.395c-1.023 0-2.449-.559-2.449-2.325zm4.65 15.409h3.132c4 0 5.828-2.945 5.828-6.666c0-3.969-1.859-6.852-6.139-6.852h-2.822z");
}
</style><path class="dgh7jhswh"/><path class="k161_wbmt"/>`,
		"fallback": "twemoji:id-button",
	});
}

export default Component;
