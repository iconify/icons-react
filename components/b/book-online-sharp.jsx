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
		"content": `<style>.kzrm-eb9p {
  fill: currentColor;
  d: path("M6 22V2h12.077v4.83H19v3.686h-.923V22zm2.616-6.616h6.769v-2.538q-.36 0-.603-.243T14.539 12t.243-.603t.603-.243V8.616h-6.77v2.538q.36 0 .603.243q.244.244.244.603t-.244.603t-.602.243zm3.082-1.39q-.121-.121-.121-.302t.121-.302t.302-.12t.302.12t.121.302t-.121.302t-.302.121t-.302-.12m0-1.693q-.121-.121-.121-.302t.121-.302t.302-.121t.302.121t.121.302t-.121.302t-.302.121t-.302-.121m0-1.693q-.121-.12-.121-.301t.121-.302q.121-.122.302-.122t.302.122t.121.302t-.121.301t-.302.122t-.302-.122");
}
</style><path class="kzrm-eb9p"/>`,
		"fallback": "material-symbols-light:book-online-sharp",
	});
}

export default Component;
