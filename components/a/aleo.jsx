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
		"content": `<style>.dv09d5sem {
  fill: var(--svg-color--111, #111);
}

.gstkoq_-e {
  d: path("M14.13 3h-3.97L6.715 13.523h2.098l2.79-8.585h1.011l2.791 8.585H8.813l-.65 1.939h7.868L17.835 21H20z");
}

.t5d7j4bxz {
  d: path("M4.266 21h2.093l1.805-5.538H6.08zm.369-7.477L4 15.462h2.08l.635-1.939z");
}
</style><g class="dv09d5sem"><path class="gstkoq_-e"/><path class="t5d7j4bxz"/></g>`,
		"fallback": "token-branded:aleo",
	});
}

export default Component;
