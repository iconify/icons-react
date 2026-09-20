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
		"content": `<style>.jdfqobpkk {
  fill: currentColor;
  d: path("M11.782 10.282Q12 10.064 12 9.75t-.218-.532T11.25 9t-.532.218t-.218.532t.218.532t.532.218t.532-.218m-.357 4.506l4.863-4.863l-.713-.714l-4.863 4.864zm4.857-.006q.218-.219.218-.532t-.218-.532t-.532-.218t-.532.218t-.218.532t.218.532t.532.218t.532-.218M18.384 18H8.616q-.691 0-1.153-.462T7 16.384V3.616q0-.691.463-1.153T8.616 2H15.5L20 6.5v9.885q0 .69-.462 1.153T18.384 18M15 7h4l-4-4zM4.616 22q-.691 0-1.153-.462T3 20.385V8h1v12.385q0 .23.192.423t.423.192H14v1z");
}
</style><path class="jdfqobpkk"/>`,
		"fallback": "material-symbols-light:heap-snapshot-multiple",
	});
}

export default Component;
