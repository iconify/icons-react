import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr-9vqbve.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr-9vqbve"/>`,
		"fallback": "pinhead:globe-gasoline-pump-with-e",
	});
}

export default Component;
