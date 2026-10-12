import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbg283bvc.css';
import '../../css/z/z8ho9sb_d.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbg283bvc"/><path clip-rule="evenodd" class="z8ho9sb_d"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-search-corner-filled",
	});
}

export default Component;
