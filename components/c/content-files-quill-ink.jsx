import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlmdbg7_y.css';
import '../../css/a/alofci_ew.css';
import '../../css/v/vbwj7mb1v.css';
import '../../css/h/hix411l_q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlmdbg7_y"/><path class="alofci_ew"/><path class="vbwj7mb1v"/><path class="hix411l_q"/>`,
		"fallback": "streamline-pixel:content-files-quill-ink",
	});
}

export default Component;
