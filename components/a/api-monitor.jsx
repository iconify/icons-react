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
		"content": `<style>.ormp3mbgv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.625 2.75h4.75q2.848 0 4.861 2.014t2.014 4.861v4.75q0 2.848-2.014 4.861t-4.861 2.014h-4.75q-2.848 0-4.861-2.014T2.75 14.375v-4.75q0-2.848 2.014-4.861T9.625 2.75M12 8q-3.098 0-6.073 3.516q-.042.05-.075.107q-.034.057-.056.119q-.023.062-.034.127T5.75 12t.012.131q.011.065.034.127q.022.062.056.119q.033.057.075.107Q8.902 16 12 16t6.073-3.516q.042-.05.075-.107q.034-.057.056-.119q.023-.062.034-.127T18.25 12q0-.066-.012-.131q-.011-.065-.034-.127q-.022-.062-.056-.119q-.033-.057-.075-.107Q15.098 8 12 8");
}
</style><path class="ormp3mbgv"/>`,
		"fallback": "uix-solid:api-monitor",
	});
}

export default Component;
