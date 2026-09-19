import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/ab1-j-jdh.css';
import '../../css/p/p8b4atbig.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgn1ShboQ"><g class="s9cl3zbei"><path class="ab1-j-jdh"/><path class="p8b4atbig"/></g></mask></defs><path mask="url(#SVGgn1ShboQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-txt",
	});
}

export default Component;
