import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzz5zzkqw.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/w/wsi5a16wd.css';
import '../../css/g/gus1k0b4h.css';
import '../../css/r/rb9bmbcgk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzz5zzkqw"/><g class="sxsjrzbyv"><path class="wsi5a16wd"/><g clip-rule="evenodd"><path class="gus1k0b4h"/><path class="rb9bmbcgk"/></g></g>`,
		"fallback": "openmoji:dotnet",
	});
}

export default Component;
