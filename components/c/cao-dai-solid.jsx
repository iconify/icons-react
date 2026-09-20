import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgdli1bua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgdli1bua"/>`,
		"fallback": "streamline-plump:cao-dai-solid",
	});
}

export default Component;
