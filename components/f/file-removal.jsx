import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/z/zbg6bpb6y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG82ntZ8tU"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><path class="zbg6bpb6y"/></g></mask></defs><path mask="url(#SVG82ntZ8tU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-removal",
	});
}

export default Component;
