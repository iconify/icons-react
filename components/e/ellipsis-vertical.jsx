import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxl67pbry.css';
import '../../css/j/ja7twxd8s.css';
import '../../css/d/d2xz6hb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="jxl67pbry"/><circle class="ja7twxd8s"/><circle class="d2xz6hb5j"/></g>`,
		"fallback": "lucide:ellipsis-vertical",
	});
}

export default Component;
