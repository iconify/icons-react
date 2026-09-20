import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpn5_3yii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lpn5_3yii"/>`,
		"fallback": "streamline-block:control-buttons-play-2",
	});
}

export default Component;
