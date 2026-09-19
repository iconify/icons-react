import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2qwyvvft.css';
import '../../css/k/kxxy24ymj.css';
import '../../css/f/fqylq0b2v.css';
import '../../css/l/lbn781o5h.css';
import '../../css/d/d6_tw3xoa.css';
import '../../css/g/gfghb3jzg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiPCPhdLF"><g class="ft5dv1b6b"><path class="n2qwyvvft"/><path class="kxxy24ymj"/><circle class="fqylq0b2v"/><path class="lbn781o5h"/><circle class="d6_tw3xoa"/><circle class="gfghb3jzg"/></g></mask></defs><path mask="url(#SVGiPCPhdLF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:baby-app",
	});
}

export default Component;
