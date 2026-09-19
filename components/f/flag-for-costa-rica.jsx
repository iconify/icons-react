import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f32oxd66x {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M0 22h64v20H0z");
}

.sug5wpbkh {
  fill: var(--svg-color--2b3990, #2b3990);
  d: path("M10 54h44c5.086 0 8.247-2.905 9.446-7H.554c1.199 4.095 4.36 7 9.446 7m44-44H10c-5.086 0-8.247 2.905-9.446 7h62.893c-1.2-4.095-4.361-7-9.447-7");
}

.xj0qee32h {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M64 42H0v1c0 1.413.19 2.759.554 4h62.893c.363-1.241.553-2.587.553-4zm0-21c0-1.413-.19-2.759-.554-4H.554A14.2 14.2 0 0 0 0 21v1h64z");
}
</style><path class="f32oxd66x"/><path class="sug5wpbkh"/><path class="xj0qee32h"/>`,
		"fallback": "emojione-v1:flag-for-costa-rica",
	});
}

export default Component;
