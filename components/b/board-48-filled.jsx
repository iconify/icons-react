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
		"content": `<style>.xiuoayboh {
  fill: currentColor;
  d: path("M23 42H12.25A6.25 6.25 0 0 1 6 35.75V19.5h17zm19-6.25A6.25 6.25 0 0 1 35.75 42H25.5V31H42zM35.75 6A6.25 6.25 0 0 1 42 12.25V28.5H25.5V6zM23 17H6v-4.75A6.25 6.25 0 0 1 12.25 6H23z");
}
</style><path class="xiuoayboh"/>`,
		"fallback": "fluent:board-48-filled",
	});
}

export default Component;
