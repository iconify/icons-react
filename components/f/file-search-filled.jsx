import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpltfcc5a.css';
import '../../css/e/ee1w0tnkd.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpltfcc5a"/><path clip-rule="evenodd" class="ee1w0tnkd"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-search-filled",
	});
}

export default Component;
